import React, { useEffect } from 'react';
import { BalanceView } from '../../modules/BalanceView';
import { getTimeFrame } from '../../modules/BalanceView/services/transactions.service';
import { TransactionsView } from '../../modules/TransactionView';
import { ActionBar } from './components/ActionBar';
import { useTransactionsFilters } from '../../modules/TransactionView/context/transactionsFilter.context';

export const Wallet = () => {
	const { setDateRange } = useTransactionsFilters();
	useEffect(() => {
		const { fromDate, toDate } = getTimeFrame();
		setDateRange(fromDate, toDate);
	}, []);
	useEffect(() => {
		return () => {
			setDateRange(null);
		};
	}, []);
	
	return (
		<>
			<BalanceView />
			<ActionBar/>
			<TransactionsView/>
		</>
	);
};