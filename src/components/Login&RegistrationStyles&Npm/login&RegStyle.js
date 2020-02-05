const style = {
    h1: {
      marginBottom: 30
    },
    form: {
      width: '25vw',
      background: "#fff",
      padding: 70,
      borderRadius: 10,
      // border: '1px solid #FE654F',
      boxShadow: '0px 0px 15px 0px rgba(254,101,79,1)',
    },
    mainDiv: {
      padding: "20px 0",
      // background: 'linear-gradient(120deg, #FE654F, #8e44ad)',
    },
    txtb: {
      margin: 10
    },
    btn: {
      background: "linear-gradient(120deg, #FE654F, #8e44ad, #FE654F)",
      backgroundSize: "200%",
      margin: 10,
      color: "#fff",
      outline: "none",
      cursor: "pointer",
      transition: ".5s",
      "&:hover": {
        backgroundPosition: "right",
      }
    },
    forgotPassword: {
      textAlign : 'center',
      cursor: 'pointer',
      textDecoration: 'underline',
    }
  };

export default style;