import React from 'react';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo(a),</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 6</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt="Paolla Oliveira"
              />
              <strong>Paolla Oliveira</strong>
              <span><FiClock />09:00</span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
