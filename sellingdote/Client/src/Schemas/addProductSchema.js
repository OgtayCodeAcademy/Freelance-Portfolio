import yup from 'yup';

export const AddProductSchema = yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    image: yup.string().required()
})