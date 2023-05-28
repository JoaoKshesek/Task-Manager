import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import '../../styles/global.css'

//Declaração do componente CriarTarefa, recebendo como props, do Componente ListarTarefa, os states handClose, tarefas e setTarefas
const CriarTarefa = ({handleClose, tarefas, setTarefas}) =>{
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');
  
  useEffect(() => {
    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  },[]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    setTarefas(
      [...tarefas, 
        {
          idTarefa,
          tituloTarefa,
          descricaoTarefa,
          inicioTarefa,
          fimTarefa,
          recursoTarefa,
          statusTarefa
        }
      ]);

    handleClose();
  };

  return(
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader sx={{ background: 'linear-gradient(0deg, rgba(40,118,105,1) 0%, rgba(54,156,148,1) 100%)', color: '#fff'}}
          title="Cadastro de Tarefas"
        /> 
        <CardContent sx={{
          width: '95%',
        }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormHelperText id="tarefa_titulo_helper_text" sx={{ color: '#095852', fontWeight:'bold'}}>Título da Tarefa.</FormHelperText>
              <Input id="tarefa_titulo" aria-describedby="tarefa_titulo_helper_text" value={tituloTarefa} onChange={e => { setTituloTarefa(e.target.value) }} sx={{
                    color:'#095852',
                    fontWeight: 400,
                    paddingLeft:'13px'
                  }} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>  
            <FormControl fullWidth>
              <FormHelperText id="tarefa_descricao_helper_text" sx={{ color: '#095852', fontWeight:'bold'}}>Descrição da Tarefa.</FormHelperText>
              <Input id="tarefa_descricao" aria-describedby="tarefa_descricao_helper_text" value={descricaoTarefa} onChange={e => { setDescricaoTarefa(e.target.value) }} sx={{
                    color:'#095852',
                    fontWeight: 400,
                    paddingLeft:'13px'
                  }}  />
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>  
              <FormControl>
                <FormHelperText id="tarefa_inicio_helper_text" sx={{ color: '#095852', fontWeight:'bold'}}>Início da Tarefa.</FormHelperText>
                <Input id="tarefa_inicio" type="date" aria-describedby="tarefa_inicio_helper_text" value={inicioTarefa} onChange={e => { setInicioTarefa(e.target.value) }}
                  sx={{
                    color:'#095852',
                    fontWeight: 400,
                    paddingLeft:'13px'
                  }} 
                />
              </FormControl>
            </Grid>  
            <Grid item xs={3}>  
              <FormControl>
                <FormHelperText id="tarefa_fim_helper_text" sx={{ color: '#095852', fontWeight:'bold'}}>Fim da Tarefa.</FormHelperText>
                <Input id="tarefa_fim" type="date" aria-describedby="tarefa_fim_helper_text" value={fimTarefa} onChange={e => { setFimTarefa(e.target.value) }}
                  sx={{
                    color:'#095852',
                    fontWeight: 400,
                    paddingLeft:'13px'
                  }} 
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso" sx={{ color: '#095852', fontWeight:'bold'}}>Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                  size="small"
                  sx={{
                    color:'#095852',
                    fontWeight: 400,
                  }} 
                >
                  <MenuItem value={'Recurso 1'} selected>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso" sx={{ color: '#095852', fontWeight:'bold'}}>Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                  size="small"
                  sx={{
                    color:'#095852',
                    borderColor: '#095852',
                    fontWeight: 400,
                  }} 
                >
                  <MenuItem value={'Aguardando'} selected>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button size="small" sx={{ background: 'linear-gradient(0deg, rgba(40,118,105,1) 0%, rgba(54,156,148,1) 100%)'}} variant="contained" onClick={handleSalvar}>Salvar</Button>
              </Grid>  
              <Grid item xs={1} ml={3}>  
                <Button size="small" sx={{ color: '#095852', borderColor: '#095852'}} variant="outlined" onClick={handleClose}>Cancelar</Button>  
              </Grid>
            </Grid>  
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  background: '#f5fffd'
};

export default CriarTarefa;