import { useState } from "react";
import { SlideAnimationHOC } from "../../../../shared/components/Animation/SlideAnimationHOC";
import { ExpendAnimationHOC } from "../../../../shared/components/Animation/ExpendAnimationHOC";
import { CategoriesMap, Category } from "../../../../utils/categories";
import { useDeleteTransaction, usePatchTransaction } from "../../hooks/transactions.hook";
import { TransactionLeftActions } from "./TransactionLeftActions";
import { TransactionCategoryIcon } from "./TransactionCategoryIcon";
import { TransactionLeftData } from "./TransactionLeftData";
import { TransactionRightData } from "./TransactionRightData";
import { TransactionRightActions } from "./TransactionRightActions";
import { TransactionItemHeader } from "./TransactionItemHeader";

export const TransactionItem = ({ data, isSelected, isAbsoluteFirst, handleClick }) => {
    const Icon = CategoriesMap.get(data.category.name)?.icon ?? Category.Unknown.icon;
    const isTransactionSeen = data.seen;
    const isBottomBorderShown = (!data.isFirst || isAbsoluteFirst) && !isSelected;
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);
    const { patchTransaction, isLoading: isPatchLoading } 
        = usePatchTransaction();
    const { deleteTransaction, isLoading: isDeleteLoading, isSuccess: isDeleteSuccessful } 
        = useDeleteTransaction();
    const handleSeeClick = e => {
        e.stopPropagation();
        patchTransaction(data.id, !isTransactionSeen);
    };
    const handleDeleteClick = e => {
        e.stopPropagation();
        if (isConfirmDelete) 
            deleteTransaction(data.id);
        else 
            setIsConfirmDelete(true);
    };
    return (
        <>
            {data.isLast && (
                <TransactionItemHeader date={data.date} price={data.dailySum}/>
            )}
            <div className={`flex justify-between rounded-xl overflow-hidden ${isSelected && "bg-slate-700"}
                ${isBottomBorderShown && "border-b-2 border-slate-800"}`}
                onClick={handleClick}
            >
                <SlideAnimationHOC trigger={isSelected} elementWidth={56} 
                    direction="right" className="flex"
                >
                    <TransactionLeftActions isTransactionSeen={isTransactionSeen} 
                        handleClick={handleSeeClick}
                        isLoading={isPatchLoading}
                    />
                    <TransactionCategoryIcon isTransactionSeen={isTransactionSeen} icon={Icon}/>
                    <TransactionLeftData desc={data.description} store={data.store}/>
                </SlideAnimationHOC>
                <SlideAnimationHOC trigger={isSelected} elementWidth={isConfirmDelete ? 80 : 56} direction="left" className="flex">
                    <ExpendAnimationHOC trigger={isConfirmDelete} className={`flex`}>
                        <TransactionRightData price={data.price} paymentName={data.paymentType.name}/>
                        <TransactionRightActions isConfirmDelete={isConfirmDelete}
                            handleClick={handleDeleteClick}
                            isLoading={isDeleteLoading}
                            isSuccess={isDeleteSuccessful}
                        />
                    </ExpendAnimationHOC>
                </SlideAnimationHOC>
            </div>
        </>
    );
};