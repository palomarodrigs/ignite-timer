import { useContext, useEffect, useState } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

import { Minus, Plus } from 'phosphor-react'
import { FormContainer, TaskInput, Stepper, MinutesAmountInput, Button } from './styles'

export function NewCycleForm() {
  const [minutes, setMinutes] = useState(0)

  const { register, setValue } = useFormContext()
  const { activeCycle } = useContext(CyclesContext)

  const incrementMinutes = () => {
    setMinutes((prev) => Math.min(prev + 5, 60))
  }

  const decrementMinutes = () => {
    setMinutes((prev) => Math.max(prev - 5, 5))
  }

  useEffect(() => {
    if (activeCycle) {
      setMinutes(0)
    }
  }, [activeCycle])

  useEffect(() => {
    setValue('minutesAmount', minutes)
  }, [minutes, setValue])

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions" />

      <label htmlFor="minutesAmount">durante</label>

      <Stepper>
        <Button type="button" onClick={decrementMinutes} disabled={!!activeCycle}>
          <Minus />
        </Button>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          value={minutes}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <Button type="button" onClick={incrementMinutes} disabled={!!activeCycle}>
          <Plus />
        </Button>
      </Stepper>

      <span>minutos.</span>
    </FormContainer>
  )
}
