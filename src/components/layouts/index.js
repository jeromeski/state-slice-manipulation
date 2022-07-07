import styled, { css } from "styled-components";
import { space, flexbox } from "styled-system";
import { Container, Row, Col } from "@bootstrap-styled/v4";

export const StyledContainer = styled(Container)``;
export const StyledRow = styled(Row)``;

export const StyledCol = styled(Col)`
${space}
${flexbox}
${css}
`;
