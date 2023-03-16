import { ReactComponent as Add } from "assets/icons/add.svg";
import EditTable from "components/EditTable";
import { HTMLAttributes } from "react";
import * as S from "./style";

type ManageTablesType = HTMLAttributes<HTMLDivElement>;

type ManagetablesProps = {} & ManageTablesType;

const ManageTables = ({ ...props }: ManagetablesProps) => {
  return (
    <S.ManageTables {...props}>
      <S.ManageTablesTitle>Gerenciar Mesas</S.ManageTablesTitle>
      <S.ManageTablesSub>
        <b>Mesas</b>
      </S.ManageTablesSub>
      <S.ManageTablesContent>
        <S.ManageTablesContentAdd>
          <Add />
          <span>Adicionar mesa</span>
        </S.ManageTablesContentAdd>
        <S.ManageTablesContentAdd>
          <label htmlFor=" tableId ">Numero da mesa</label>
          <S.EditForm id="tableId" type="number" placeholder=" 1 " />
        </S.ManageTablesContentAdd>
        <EditTable />
      </S.ManageTablesContent>
      <S.ManageTablesActions>
        <S.ManageTablesActionsCancel>Cancelar</S.ManageTablesActionsCancel>
        <S.ManageTablesActionsSave>Salvar Mudanças</S.ManageTablesActionsSave>
      </S.ManageTablesActions>
    </S.ManageTables>
  );
};

export default ManageTables;
