import React, { FunctionComponent } from 'react'
import { Group, Button, Text } from '@rayseinc-packages/ui'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SaveButtonProps {
  onClick: () => void
}

export const SaveButton: FunctionComponent<SaveButtonProps> = ({ onClick }) => {
  return (
    <Group
      sx={{
        padding: '12px',
        borderTop: '1px solid #C5C2BA',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        margin: '0 auto',
        background: '#F8F7F4',
      }}
    >
      <Button
        sx={{
          backgroundColor: '#000000',
          borderRadius: '12px',
          padding: '16px 20px',
          width: 'calc(100% - 24px)',
        }}
        onClick={onClick}
      >
        <Text variant="rayse-16700" color="#FFFFFF" textTransform="none">
          Save changes
        </Text>
      </Button>
    </Group>
  )
}
