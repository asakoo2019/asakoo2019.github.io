const style = {
    h1: {
      marginBottom: 30,
    },
    form: {
      width: '25vw',
      background: "#fff",
      padding: 70,
      borderRadius: 10,
      boxShadow: '5px -5px 10px -3px rgba(0,0,0,0.75)',
    },
    mainDiv: {
      padding: "20px 0",
    },
    txtb: {
      margin: 10
    },
    btn: {
      background: "linear-gradient(120deg, #FE654F, #BEBEBE, #FE654F)",
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