import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';

import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

import '../../styles/global.css'

//A função abaixo é usada para criar o array contendo os dados iniciais da listagem de tarefas.
function createData(
  idTarefa: number,
  tituloTarefa: string,
  descricaoTarefa: string,
  inicioTarefa: string,
  fimTarefa: string,
  statusTarefa: string,
  recursoTarefa: string,
) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

//Definição do array contendo os dados iniciais da listagem de tarefas
const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Tarefa 3', 'Descrição da Tarefa 3', '2022-01-04', '2022-01-05', 'Em Andamento', 'Recurso 3'),
  createData(4, 'Tarefa 4', 'Descrição da Tarefa 4', '2022-01-05', '2022-01-06', 'Em Andamento', 'Recurso 4'),
  createData(5, 'Tarefa 5', 'Descrição da Tarefa 5', '2022-01-06', '2022-01-07', 'Em Andamento', 'Recurso 5'),
  createData(6, 'Tarefa 6', 'Descrição da Tarefa 6', '2022-01-07', '2022-01-08', 'Aguardando', 'Recurso 6'),
];

//Componente ListarTarefa
const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  //O array definido acima é setado como conteúdo do state Tarefas na renderização inicial do componente.
  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);

    //Objeto local para armazenamento da tarefa filtrada de acordo com a seleção do usuário
    let tarefaParaEditar = tarefas.filter(obj => {
      return obj.idTarefa === id;
    })[0];

    //Atribuição do Objeto local, setado acima, ao state Tarefa
    setTarefa(tarefaParaEditar);

    //Seta como true o state responsável pela exibição do Model de Editar Tarefa
    setOpenEditar(true)
  };

  const handleDeletar = (id) => {
    setTarefas(current =>
      current.filter(tarefa => {
        return tarefa.idTarefa !== id;
      }),
    );
  };

  return (
    <>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, backgroundColor: '#f5fffd' }} size="small" aria-label="a dense table">
              <TableHead sx={{ background: 'linear-gradient(0deg, rgba(40,118,105,1) 0%, rgba(54,156,148,1) 100%)' }}>
                <TableRow>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">#</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Título</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Descrição</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Recurso</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Data de Início</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Data de Finalização</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Status</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row, indice) => (
                  <TableRow
                    key={indice}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{color: '#095852'}} component="th" scope="row" align="center">
                      {row.idTarefa}
                    </TableCell>
                    <TableCell sx={{color: '#095852'}} component="th" scope="row" align="center">
                      {row.tituloTarefa}
                    </TableCell>
                    <TableCell sx={{color: '#095852'}} align="center">{row.descricaoTarefa}</TableCell>
                    <TableCell sx={{color: '#095852'}} align="center">{row.recursoTarefa}</TableCell>
                    <TableCell sx={{color: '#095852'}} align="center">{row.inicioTarefa}</TableCell>
                    <TableCell sx={{color: '#095852'}} align="center">{row.fimTarefa}</TableCell>
                    <TableCell align="center">
                      <div className={`status ${row.statusTarefa}`}>{row.statusTarefa}</div>
                    </TableCell>
                    <TableCell align="center" sx={{display: 'flex', justifyContent: 'space-around'}}>
                      <Button variant="contained" color="info" onClick={() => handleEditar(row.idTarefa)}><EditIcon fontSize="small" /></Button>
                      <Button variant="contained" color="error" onClick={() => handleDeletar(row.idTarefa)}><DeleteIcon fontSize="small" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" sx={{ background: 'linear-gradient(0deg, rgba(40,118,105,1) 0%, rgba(54,156,148,1) 100%)' }} onClick={handleOpen}>Criar Tarefa</Button>
        </CardActions>
      </Card>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <CriarTarefa handleClose={handleClose} tarefas={tarefas} setTarefas={setTarefas} />
          </div>
        </Modal>
      </div>
      <div>
        <Modal
          open={openEditar}
          onClose={handleCloseEditar}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <EditarTarefa handleCloseEditar={handleCloseEditar} idTarefaSelecionada={idTarefaSelecionada} tarefas={tarefas} tarefa={tarefa} setTarefas={setTarefas} />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ListarTarefa;