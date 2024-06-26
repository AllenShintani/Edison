import React from 'react'
import { useState } from 'react'
import { Board } from '../utils/Board'
import { render } from '../rendere/render'
import { Button } from '../components/input/Button'
import { Led } from '../components/output/Led'

const App: React.FC = () => {
  const [ledOne, setLedOne] = useState(false)

  return (
    <Board
      port={'/dev/ttyUSB0'}
      baudRate={115200}
    >
      <Button
        pin={8}
        triggered={() => setLedOne(true)}
        untriggered={() => setLedOne(false)}
      >
        <Led
          pin={13}
          isOn={ledOne}
        />
      </Button>
    </Board>
  )
}
render(<App />)
