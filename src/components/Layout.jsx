import { Button, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const titlePropsLocal = {
  variant: 'h1',
  color: 'primary',
};

const subtitlePropsLocal = {
  variant: 'subtitle2',
  sx: { color: (theme) => theme.palette.secondary[500] },
};

const Layout = ({
  title = 'Title',
  titleProps,
  subtitle = 'Subtitle',
  subtitleProps,
  buttonProps,
  cancelProps,
  container,
}) => {
  return (
    <div style={{ height: 'auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: 'auto',
          marginBottom: '24px',
        }}
      >
        <div>
          <div>
            <Typography {...titlePropsLocal} {...titleProps} children={title} />
          </div>
          <Typography
            {...subtitlePropsLocal}
            {...subtitleProps}
            children={subtitle}
          />
        </div>
        <div>
          {cancelProps && (
            <Button variant="outlined" {...cancelProps}>
              Cancelar
            </Button>
          )}
        </div>
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        {container}
        <div style={{ height: '100px' }}></div>
        {buttonProps && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <LoadingButton
              sx={{
                borderRadius: '36px',
                position: 'fixed',
                bottom: '50px',
                height: '56px',
              }}
              color="primary"
              loadingPosition="start"
              startIcon={<SaveIcon sx={{ marginLeft: '4px' }} />}
              variant="contained"
              {...buttonProps}
            >
              {buttonProps.text || 'Guardar'}
            </LoadingButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
