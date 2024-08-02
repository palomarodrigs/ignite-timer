import { Warning } from 'phosphor-react'
import { Content, EmptyDataContainer } from './styles'

export function EmptyData() {
  return (
    <EmptyDataContainer>
      <Warning size={50} />

      <Content>
        <span>Nenhuma tarefa encontrada!</span>
        <p>Adicione novas tarefas para visualizar o seu histórico.</p>
      </Content>
    </EmptyDataContainer>
  )
}
