import propTypes from "prop-types";

export default function Soma({ numero1, numero2 }) {
  const resultado = numero1 + numero2;
  return <p>Hello World {resultado}</p>;
}

Soma.propTypes = {
  numero1: propTypes.number,
  numero2: propTypes.number,
};
