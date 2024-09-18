import { BoxProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FormLineProps extends BoxProps {
    label: string
    value?: ReactNode | string
}

const FormLine = ({
    label = '',
    value = '',
    children,
    width,
    ...props
}: FormLineProps) => {

    return <Text as="span" className="w-full" {...props}>
        {label && (
            <Text as="span" textAlign="right" className="inline-block mr-6" width={width} fontSize={20} fontWeight="800">
                {`${label}: `}
            </Text>
        )}
        {value ? (
            <Text as="span" className="inline-block  pt-0.5 mt-px">
                {value}
            </Text>
        ) : null}
    </Text>
}

export default FormLine