import { Highlight, Text, TextProps } from '@chakra-ui/react'

interface HeadingProps extends TextProps {
  size: 'lg' | 'md' | 'sm' | 'xs' | '2xs'
  text: string
  isHighlighted?: boolean
  highlightedText?: string | string[]
  color: string
}

const variant = {
  lg: '2.5rem',
  md: '2rem',
  sm: '1.75rem',
  xs: '1.25rem',
  '2xs': '0.875rem',
}

const lineHeight = {
  lg: '3.125rem',
  md: '2.5rem',
  sm: '2.1875rem',
  xs: '1.5625rem',
  '2xs': '1.09375rem',
}

export function Heading({
  size,
  text,
  isHighlighted,
  highlightedText,
  color,
  ...rest
}: HeadingProps) {
  return (
    <Text
      fontSize={variant[size]}
      lineHeight={lineHeight[size]}
      fontWeight="semibold"
      color={color}
      {...rest}
    >
      {isHighlighted && highlightedText ? (
        <Highlight
          query={highlightedText}
          styles={{ color, textDecor: 'underline' }}
        >
          {text}
        </Highlight>
      ) : (
        text
      )}
    </Text>
  )
}
