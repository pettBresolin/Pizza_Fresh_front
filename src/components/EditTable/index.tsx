import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditTable = () => {
  return (
    <S.EditTable>
      <>
        <S.EditTableDetails>
          <S.EditTableDetailsName>Numero da mesa</S.EditTableDetailsName>
        </S.EditTableDetails>
        <S.EditTableAction>
          <Pencil />
          Editar
        </S.EditTableAction>
      </>

      <>
        <label htmlFor="tableId">Numero da mesa</label>
        <S.EditForm id="tableId" type="number" placeholder="01" />
        <S.Deletar>Deletar mesa</S.Deletar>
      </>
    </S.EditTable>
  );
};

export default EditTable;
