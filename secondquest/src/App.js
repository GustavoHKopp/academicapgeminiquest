import './App.css'

function App() {
  const verifyPassword = () => {
    const pass = document.getElementById('inputPassword').value
    if(pass.length < 6){
      const length = 6 - pass.length 
      alert(`minimo de 6 caracteres adicione ${length} caracteres`)
    } else {
      alert('Senha segura')
    }
  }

  return <>
  <div className='container'>
    <div className='children'>
      <h1>Verificação de Senha</h1>
      <h3>A senha deve possuir no minimo 6 caracteres</h3>
      <input type="password" id='inputPassword'></input><br />
      <button onClick={verifyPassword} className="button">Verificar</button>
    </div>
  </div>
  </>;
}

export default App;
