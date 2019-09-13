import { SyncLoader } from "react-spinners";
import React from "react";
import {colors} from "../../styles/globals";
import StyledSpinner from './Spinner';

const Spinner = () => {
  return (
    <StyledSpinner>
      <SyncLoader
        sizeUnit={"px"}
        size={25}
        color={colors.accent}
        loading={true}
      />
    </StyledSpinner>
  );
};

export default Spinner;
