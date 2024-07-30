import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>5 minutos</td>
              <td>Há um dia</td>
              <td>
                <Status $statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>5 minutos</td>
              <td>Há um dia</td>
              <td>
                <Status $statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>5 minutos</td>
              <td>Há um dia</td>
              <td>
                <Status $statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>5 minutos</td>
              <td>Há um dia</td>
              <td>
                <Status $statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>5 minutos</td>
              <td>Há um dia</td>
              <td>
                <Status $statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>5 minutos</td>
              <td>Há um dia</td>
              <td>
                <Status $statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
