import { HTMLAttributes, useState } from "react";
import CheckboxIcon from "components/CheckboxIcon";
import OrderConfirmation from "components/OrderConfirmation";
import { OrderItemType } from "types/OrderItemType";

import { ReactComponent as Card } from "assets/icons/credit-card.svg";
import { ReactComponent as Cash } from "assets/icons/wallet.svg";
import { OrderType } from "types/orderType";
import { PaymentMethod } from "types/PaymentMethod";

import * as S from "./style";
import { useMutation } from "react-query";
import { ErrorResponse } from "types/api/error";
import { OrderService } from "services/OrderService";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { UserResponse } from "types/api/user";
import { LocalStorageKeys } from "types/localStorageKeys";
import { Order } from "types/api/order";

type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps = {
  orders: OrderItemType[];
  selectedTable?: number;
  onOrdersChange: (orders: OrderItemType[]) => void;
  onChangeActiveOrderType: (data: OrderType) => void;
  activeOrderType: OrderType;
  onCloseSection: () => void;
} & CheckoutSectionType;

const CheckoutSection = ({
  orders,
  selectedTable,
  onOrdersChange,
  onChangeActiveOrderType,
  activeOrderType,
  onCloseSection,
}: CheckoutSectionProps) => {
  const [activeMethod, setActiveMethod] = useState<PaymentMethod>();

  const [closing, setClosing] = useState<boolean>(false);

  const closeOrder = useMutation(OrderService.create, {
    onSuccess: (data: {} & ErrorResponse) => {
      if (data.statusCode) {
        return;
      }
      onOrdersChange([]);
    },
    onError: () => {
      console.error("Erro ao fechar pedido!");
    },
  });

  const handlePaymentConfirm = () => {
    const userId =
      LocalStorageHelper.get<UserResponse>(LocalStorageKeys.USER)?.id || "";
    const orderRequest: Order = {
      userId,
      tableNumber: Number(selectedTable),
      products: orders,
    };
    closeOrder.mutate(orderRequest);
  };

  const handleCloseSection = () => {
    setClosing(true);
    setTimeout(onCloseSection, 800);
  };

  return (
    <S.CheckoutSection closing={closing}>
      <S.CheckoutSectionConfirmation>
        <S.BackIcon onClick={handleCloseSection} />
        <OrderConfirmation orders={orders} onOrdersChange={onOrdersChange} />
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
              <CheckboxIcon
                onClick={() => setActiveMethod(PaymentMethod.CARD)}
                active={activeMethod === PaymentMethod.CARD}
                value="Cartão"
                icon={<Card />}
              />
              <CheckboxIcon
                onClick={() => setActiveMethod(PaymentMethod.CASH)}
                active={activeMethod === PaymentMethod.CASH}
                value="Dinheiro"
                icon={<Cash />}
              />
            </S.PaymentFormCheckbox>

            {activeMethod === PaymentMethod.CARD && (
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
            )}
          </S.PaymentForm>
        </S.CheckoutSectionPaymentForm>
        <S.PaymentActions>
          <S.PaymentActionsDetails>
            <S.PaymentActionsDetailsOrderType>
              <label htmlFor="card">Tipo de de pedido</label>
              <select
                onChange={({ target }) =>
                  onChangeActiveOrderType(target.value as OrderType)
                }
                name="order-type"
                id="order-type"
                value={Object.values(OrderType)
                  .filter((option) => option === activeOrderType)
                  .pop()}
              >
                {Object.values(OrderType).map((value, idx) => (
                  <option key={`OrderType-${idx}`} value={value}>
                    {value}
                  </option>
                ))}
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
                value={selectedTable}
              />
            </S.PaymentActionsDetailsTableNumber>
          </S.PaymentActionsDetails>

          <S.PaymentActionsButtonGroup>
            <S.PaymentActionsButtonGroupCancel onClick={handleCloseSection}>
              Cancelar
            </S.PaymentActionsButtonGroupCancel>

            <S.PaymentActionsButtonGroupConfirm onClick={handlePaymentConfirm}>
              Confirmar Pagamento
            </S.PaymentActionsButtonGroupConfirm>
          </S.PaymentActionsButtonGroup>
        </S.PaymentActions>
      </S.CheckoutSectionPayment>
    </S.CheckoutSection>
  );
};

export default CheckoutSection;
