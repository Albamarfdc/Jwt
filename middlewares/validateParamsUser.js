const validateParametersUser = (req, res, next) => {
  const { user } = req.body;
  if (!user.email || !user.password || !user.nombre || !user.apellido) {
    return res.status(400).json({
      error: 'el email, password, nombre y apellido deben estar presentes',
    });
  }
  next();
};

export { validateParametersUser };

const retornoVacio = () => {
  return;
};

const devuelveValor = () => {
  return 20;
};

const saludar = () =>{
    console.log ('hola pepito')
}

