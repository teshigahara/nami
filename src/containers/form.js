import { useContext } from 'react';
import { Form } from '../components/';
import { SETTINGS } from '../constants/form_settings';
import { settingsContext } from '../contexts/settings';

const FormContainer = () => {
  const { rounds, setRounds, pitchNotation, setPitchNotation } = useContext(
    settingsContext
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form>
      <Form.Title>Settings</Form.Title>
      <Form.Base onSubmit={handleSubmit}>
        <Form.Label htmlFor="rounds">
          <Form.LabelHead>Rounds</Form.LabelHead>
          <Form.Select
            onChange={({ target }) => setRounds(parseInt(target.value))}
            name="rounds"
            value={rounds}
          >
            {SETTINGS.rounds.map((option) => (
              <Form.Option key={option} value={option}>
                {option}
              </Form.Option>
            ))}
          </Form.Select>
        </Form.Label>

        <Form.Label htmlFor="pitchNotation">
          <Form.LabelHead>Pitch Notation</Form.LabelHead>
          <Form.Select
            onChange={({ target }) => setPitchNotation(target.value)}
            value={pitchNotation}
            name="pitchNotation"
          >
            {Object.keys(SETTINGS.pitchNotation).map((option) => (
              <Form.Option key={option} value={option}>
                {SETTINGS.pitchNotation[option]}
              </Form.Option>
            ))}
          </Form.Select>
        </Form.Label>
        <Form.Link to="/play">
          <Form.Submit>START</Form.Submit>
        </Form.Link>
      </Form.Base>
    </Form>
  );
};

export default FormContainer;