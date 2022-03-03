import * as yup from 'yup';

const MESSAGES = {
  CAMPO_REQUERIDO: 'Campo requerido',
};

/* Custom validations */
function requiredSelectMethod(message) {
  return this.test('requiredSelect', message, function (value) {
    const { path, createError } = this;
    const fieldValue = typeof value === 'object' ? value?.value : value;

    if (!value) {
      return createError({
        path,
        message: message ?? MESSAGES.CAMPO_REQUERIDO,
      });
    }

    if (fieldValue == -1) {
      return createError({
        path,
        message: message ?? MESSAGES.CAMPO_REQUERIDO,
      });
    }

    return true;
  });
}
yup.addMethod(yup.mixed, 'requiredSelect', requiredSelectMethod);

export const FieldValidations = {
  required: yup.string().required(MESSAGES.CAMPO_REQUERIDO),
  numberInger: ({ required } = {}) =>
    yup
      .string()
      .typeError('Debe ser un número')
      .matches(/^[0-9]+$/, 'Solo se permiten dígitos')
      .required(required ? MESSAGES.CAMPO_REQUERIDO : null)
      .min(8, 'Debe contener almenos 8 dígitos'),
  requiredSelect: yup.mixed().requiredSelect(),
};

export default FieldValidations;
