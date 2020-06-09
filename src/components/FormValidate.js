import React from "react"
import { useForm } from "react-hook-form"
import {
  FormControl,
  TextField,
  Grid
} from '@material-ui/core'
import './styles/FormValidate.css'

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (

    <Grid >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={6} md={4} lg={2} >
          <div class="form-group">
            <label for="nome">Nome</label>
            <input
              type="text"
              class="form-control"
              id="nome"
              placeholder="Nome"
              name="nome"
              ref={register({ required: true })}
            />
            <span style={styles.errorText} >{errors.nome && "Campo Obrigatório!"}</span>
          </div>
        </Grid>

        <Grid item item xs={6} md={4} lg={3} >
          <div className='input-row' >
            <div class="form-group">
              <label for="endereco">Endereço</label>
              <input
                type="text"
                class="form-control"
                id="endereco"
                placeholder="endereco"
                name="endereco"
                ref={register({ required: true })}
              />
              <span style={styles.errorText} >{errors.endereco && "Campo Obrigatório!"}</span>
            </div>

            <div class="form-group">
              <label for="complemento">Complemento</label>
              <input
                type="text"
                style={{ margin: "0 3px" }}
                class="form-control"
                id="complemento"
                placeholder="complemento"
                name="complemento"
                ref={register({ required: true })}
              />
              <span style={styles.errorText} >{errors.complemento && "Campo Obrigatório!"}</span>
            </div>
          </div>
        </Grid>
        
      </form>

      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </Grid>
  )
}

const styles = {
  inputText: {
    margin: 5,
  },
  errorText: {
    color: 'red'
  }
}