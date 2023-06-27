type TextInputType = {
    label: string;
    type: string;
    name: string;
    placeholder: string;
} & React.ComponentPropsWithoutRef<'input'>

const TextInput = ({label, type, name, placeholder, ...rest}: TextInputType) => {
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input type={type} name={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder} required
                {...rest}
            />
        </>
    )
}

export default TextInput