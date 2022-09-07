import styled from "styled-components"

export const Timer = styled.h2`
    color: ${props => props.value % 2 === 0 ? 'black' : 'red' }`