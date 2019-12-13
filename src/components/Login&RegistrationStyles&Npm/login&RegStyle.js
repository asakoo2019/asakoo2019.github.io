const style = {
    h1: {
      marginBottom: 30
    },
    form: {
      width: '25vw',
      background: "#f1f1f1",
      padding: "80px 40px",
      borderRadius: 10,
    },
    mainDiv: {
      padding: "20px 0",
      minHeight: "100vh",
      backgroundImage: 'linear-gradient(120deg, #3498db, #8e44ad)',
    },
    txtb: {
      margin: 10
    },
    btn: {
      background: "linear-gradient(120deg, #3498db, #8e44ad, #3498db)",
      backgroundSize: "200%",
      margin: 10,
      color: "#f1f1f1",
      outline: "none",
      cursor: "pointer",
      transition: ".5s",
      "&:hover": {
        backgroundPosition: "right",
      }
    },
  };

export default style;