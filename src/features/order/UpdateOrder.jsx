import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  //   console.log(order);
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        Make Priority for {formatCurrency(order.orderPrice * 0.2)}
      </Button>
    </fetcher.Form>
  );
}

// export async function action({ request, params }) {
export async function action({ params }) {
  //   console.log("update");
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
