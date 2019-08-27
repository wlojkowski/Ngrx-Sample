import { CustomerState } from '../customers/state/customer.reducer';

export interface AppState {
    customers: CustomerState;
}