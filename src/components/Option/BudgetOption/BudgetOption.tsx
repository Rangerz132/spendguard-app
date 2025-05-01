import { BiHighlight, BiTrash, BiXCircle } from "react-icons/bi";
import { setStatus } from "../../../store/status/statusSlice";
import { OptionType } from "../type/OptionType";
import { deleteBudget as deleteBudgetRedux } from "../../../store/budgets/budgetsSlice";
import { deleteBudget } from "../../../services/supabase/budgetService";

export const budgetModifyOption: OptionType = {
  icon: <BiHighlight />,
  title: "Modify the budget",
  action: (data?: any) => {
    if (data?.navigate) {
      data.navigate(`/updateBudget/${data.id}`);
    }
  },
};

export const budgetDeleteOption: OptionType = {
  icon: <BiTrash />,
  title: "Remove the budget",
  action: async (data: any) => {
    try {
      await deleteBudget(data.id);
      if (data?.dispatch) {
        data.dispatch(deleteBudgetRedux(data.id));
        data.dispatch(
          setStatus({
            message: "You successfully removed a budget.",
            isShowed: true,
            isValid: true,
          })
        );
        if (data?.navigate) {
          data.navigate(`/budgets`);
        }
      }
    } catch (error) {
      console.error("Error when removing the budget:", error);
    }
  },
};

export const budgetCloseOption: OptionType = {
  icon: <BiXCircle />,
  title: "Close the budget",
  action: () => {},
};

export const budgetOptions: OptionType[] = [
  budgetModifyOption,
  budgetDeleteOption,
  budgetCloseOption,
];
