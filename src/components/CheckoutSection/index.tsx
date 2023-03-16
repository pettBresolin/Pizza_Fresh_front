import { HTMLAttributes, useState } from "react";
import CheckboxIcon from "components/CheckboxIcon";
import OrderConfirmation from "components/OrderConfirmation";

import { ReactComponent as Card } from "assets/icons/credit-card.svg";
import { ReactComponent as Cash } from "assets/icons/wallet.svg";

import * as S from "./style";

type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps = {
  onCloseSection: () => void;
} & CheckoutSectionType;

const CheckoutSection = ({ onCloseSection }: CheckoutSectionProps) => {
  const [closing, setClosing] = useState<boolean>(false);

  const handleCloseSection = () => {
    setClosing(true);
    setTimeout(onCloseSection, 800);
  };

  return (
    <S.CheckoutSection closing={closing}>
      <S.CheckoutSectionConfirmation>
        <S.BackIcon onClick={handleCloseSection} />
        <OrderConfirmation />
      </S.CheckoutSectionConfirmation>
      <S.CheckoutSectionPayment>
        <S.CheckoutSectionPaymentHead>Pagamento</S.CheckoutSectionPaymentHead>
        <S.CheckoutSectionPaymentSub>
          2 metodos de pagamento disponiveis
        </S.CheckoutSectionPaymentSub>
        <S.CheckoutSectionPaymentForm>
          <S.CheckoutSectionPaymentFormTitle>
            Metodo de pagamento
          </S.CheckoutSectionPaymentFormTitle>
          <S.PaymentForm>
            <S.PaymentFormCheckbox>
              <CheckboxIcon active={true} value="Cartão" icon={<Card />} />
              <CheckboxIcon active={false} value="Dinheiro" icon={<Cash />} />
            </S.PaymentFormCheckbox>
            <>
              <S.PaymentFormGroup>
                <label htmlFor="titular">Titular do cartao</label>
                <input
                  type="text"
                  name="titular"
                  id="titular"
                  placeholder="Petterson"
                />
              </S.PaymentFormGroup>

              <S.PaymentFormGroup>
                <label htmlFor="card">Validade do cartao</label>
                <input
                  type="text"
                  name="card"
                  id="card"
                  placeholder="1234 5678 9101 1121"
                />
              </S.PaymentFormGroup>

              <S.PaymentFormHalf>
                <S.PaymentFormHalfItem>
                  <label htmlFor="validity">Validade</label>
                  <input
                    type="text"
                    name="card"
                    id="validity"
                    placeholder="05/23"
                  />
                </S.PaymentFormHalfItem>

                <S.PaymentFormHalfItem>
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" name="cvv" id="cvv" placeholder="123" />
                </S.PaymentFormHalfItem>
              </S.PaymentFormHalf>
            </>
          </S.PaymentForm>
        </S.CheckoutSectionPaymentForm>
        <S.PaymentActions>
          <S.PaymentActionsDetails>
            <S.PaymentActionsDetailsOrderType>
              <label htmlFor="card">Tipo de de pedido</label>
              <select>
                <option> </option>
              </select>
            </S.PaymentActionsDetailsOrderType>
            <S.PaymentActionsDetailsTableNumber>
              <label htmlFor="card">Número da mesa</label>
              <input
                type="text"
                name="table"
                id="table"
                placeholder="01"
                disabled
                value={""}
              />
            </S.PaymentActionsDetailsTableNumber>
          </S.PaymentActionsDetails>

          <S.PaymentActionsButtonGroup>
            <S.PaymentActionsButtonGroupCancel>
              Cancelar
            </S.PaymentActionsButtonGroupCancel>

            <S.PaymentActionsButtonGroupConfirm>
              Confirmar Pagamento
            </S.PaymentActionsButtonGroupConfirm>
          </S.PaymentActionsButtonGroup>
        </S.PaymentActions>
      </S.CheckoutSectionPayment>
    </S.CheckoutSection>
  );
};

export default CheckoutSection;
