/** @jsx React.DOM */
define(function(require, exports, module) {

  var React = require('react');

  var {
    PropTypes
  } = React;
  var {
    span
  } = React.DOM;

  var Status = {
    PENDING: 'pending',
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED: 'failed',
  };

  var ImageLoader = React.createClass({
    propTypes: {
      wrapper: PropTypes.func,
      className: PropTypes.string,
      style: PropTypes.object,
      preloader: PropTypes.func,
      src: PropTypes.string,
      onLoad: PropTypes.func,
      onError: PropTypes.func,
      imgProps: PropTypes.object,
    },

    getDefaultProps: function() {
      return {
        wrapper: span
      };
    },

    getInitialState: function() {
      return {
        status: this.props.src ? Status.LOADING : Status.PENDING
      }
    },

    componentDidMount() {
      if (this.state.status === Status.LOADING) {
        this.createLoader();
      }
    },

    componentWillReceiveProps(nextProps) {
      if (this.props.src !== nextProps.src) {
        this.setState({
          status: nextProps.src ? Status.LOADING : Status.PENDING,
        });
      }
    },

    componentDidUpdate() {
      if (this.state.status === Status.LOADING && !this.img) {
        this.createLoader();
      }
    },

    componentWillUnmount() {
      this.destroyLoader();
    },

    getClassName() {
      var className = `imageloader ${this.state.status}`;
      if (this.props.className) className =
        `${className} ${this.props.className}`;
      return className;
    },

    createLoader() {
      this.destroyLoader(); // We can only have one loader at a time.

      this.img = new Image();
      this.img.onload = this.handleLoad;
      this.img.onerror = this.handleError;
      this.img.src = this.props.src;
    },

    destroyLoader() {
      if (this.img) {
        this.img.onload = null;
        this.img.onerror = null;
        this.img = null;
      }
    },

    handleLoad(event) {
      this.destroyLoader();
      this.setState({
        status: Status.LOADED
      });

      if (this.props.onLoad) this.props.onLoad(event);
    },

    handleError(error) {
      this.destroyLoader();
      this.setState({
        status: Status.FAILED
      });

      if (this.props.onError) this.props.onError(error);
    },

    renderImg() {
      var {
        src, imgProps
      } = this.props;
      var props = {
        src
      };

      for (var k in imgProps) {
        if (imgProps.hasOwnProperty(k)) {
          props[k] = imgProps[k];
        }
      }

      return <img {...props} />;
    },

    render() {
      var Wrapper = this.props.wrapper;
      var wrapperProps = {
        className: this.getClassName(),
      };

      if (this.props.style) {
        wrapperProps.style = this.props.style;
      }

      var children;

      switch (this.state.status) {
        case Status.LOADED:
          children = this.renderImg();
          break;

        case Status.FAILED:
          if (this.props.children) children = this.props.children;
          break;

        default:
          if (this.props.preloader) children = React.createElement(this.props.preloader);
          break;
      }

      return <span {...wrapperProps}>{children}</span>;
    }
  });

  module.exports = ImageLoader;

});
