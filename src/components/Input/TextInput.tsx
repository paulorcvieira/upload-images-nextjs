import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  // eslint-disable-next-line prettier/prettier
  Tooltip
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  // eslint-disable-next-line prettier/prettier
  Merge
} from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends ChakraInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>>;
}

const TextInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, ...rest },
  ref
) => {
  return (
    <FormControl
      display="flex"
      flexDirection="row"
      alignItems="center"
      isInvalid={!!error}
    >
      <ChakraInput
        aria-label={name}
        name={name}
        ref={ref}
        borderColor="transparent"
        bgColor="pGray.800"
        color="pGray.50"
        _placeholder={{
          color: 'pGray.200',
        }}
        _hover={{
          borderColor: 'orange.400',
        }}
        py={6}
        pr={8}
        {...rest}
      />

      {!!error && (
        <Tooltip label={error.message} bg="red.500">
          <FormErrorMessage ml={-6} mt={0} zIndex="tooltip">
            <Icon as={FiAlertCircle} color="red.500" w={4} h={4} />
          </FormErrorMessage>
        </Tooltip>
      )}
    </FormControl>
  );
};

export const TextInput = forwardRef(TextInputBase);