import { ExtendedOrderFilter, OrderFilter } from "./filters"
import { ToFetchMixin } from "./mixins"


export const OrderFilterAPI = ToFetchMixin(OrderFilter)
export const ExtendedOrderFilterAPI = ToFetchMixin(ExtendedOrderFilter)
