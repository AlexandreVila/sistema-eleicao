import './styles.css';

export const TituloLabel = ( {value}) => {

  return (
    <label
      className="titulo-label"     
    >
      {value}
    </label>
  );
}