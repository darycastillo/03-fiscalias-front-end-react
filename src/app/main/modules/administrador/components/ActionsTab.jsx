import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TvIcon from '@mui/icons-material/Tv';
import ApsPaper from '@components/ApsPaper';

const ContainerPaper = ({ children }) => {
  return (
    <ApsPaper elevation={0} sx={{ height: 512 }}>
      <div
        style={{
          width: 'auto',
          margin: 24,
          display: 'flex',
        }}
      >
        <TvIcon
          color="primary"
          sx={{ marginRight: '12px', position: 'relative', top: '6px' }}
        />
        <Typography
          children="Listado de acciones"
          variant="h4"
          color="primary"
        />
      </div>
      <div style={{ overflow: 'auto' }}>{children}</div>
    </ApsPaper>
  );
};

const Item = ({ /* icon, */ title, subtitle, innerRef, ...props }) => {
  const theme = useTheme();
  const upSM = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <ListItem
      component={Paper}
      elevation={2}
      sx={{ height: '96px', marginBottom: '24px' }}
      ref={innerRef}
      {...props}
    >
      <ListItemAvatar>
        <TvIcon fontSize="large" />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography children={title} variant="h6" color="primary" />}
        secondary={
          upSM && (
            <Typography component="p" variant="subtitle2" children={subtitle} />
          )
        }
      />
    </ListItem>
  );
};

const ActionsTab = () => {
  const actions = [
    {
      title: 'Eliminar',
      subtitle:
        'Accion para eliminar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Eliminar',
      subtitle:
        'Accion para eliminar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Eliminar',
      subtitle:
        'Accion para eliminar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Eliminar',
      subtitle:
        'Accion para eliminar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Eliminar',
      subtitle:
        'Accion para eliminar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Eliminar',
      subtitle:
        'Accion para eliminar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Listar',
      subtitle:
        'Accion para listar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Listar',
      subtitle:
        'Accion para listar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Listar',
      subtitle:
        'Accion para listar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Listar',
      subtitle:
        'Accion para listar cualquier tipo de elemento dentro del sistema',
    },
    {
      title: 'Listar',
      subtitle:
        'Accion para listar cualquier tipo de elemento dentro del sistema',
    },
  ];
  return (
    <DragDropContext>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <ContainerPaper>
            <div style={{ margin: '24px', marginTop: '0' }}>
              <Droppable droppableId="list-1">
                {(droppableProvided) => (
                  <List
                    sx={{
                      padding: '0px',
                    }}
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                  >
                    {actions.map((action, index) => (
                      <Draggable
                        key={`item-${index}`}
                        draggableId={`itemD-${index}`}
                        index={index}
                      >
                        {(draggableProvided) => (
                          <Item
                            title={action.title}
                            subtitle={action.subtitle}
                            innerRef={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            {...draggableProvided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    ))}
                    {droppableProvided.placeholder}
                  </List>
                )}
              </Droppable>
            </div>
          </ContainerPaper>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export default ActionsTab;
