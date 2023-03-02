import type { useLocation } from 'react-router';
export declare const DRAWER_PREROUTE_SET = "DRAWER_PREROUTE_SET";
export declare type SetDrawerPreRouteResponse = {
    type: typeof DRAWER_PREROUTE_SET;
    data: {
        previousRoute: Partial<ReturnType<typeof useLocation>> | null;
    };
};
export declare const setDrawerPreRoute: (data: {
    previousRoute: Partial<ReturnType<typeof useLocation>> | null;
}) => SetDrawerPreRouteResponse;
