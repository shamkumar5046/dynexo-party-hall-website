import { createContext, useContext } from 'react';

interface EnquiryContextType {
    openEnquiry: () => void;
}

export const EnquiryContext = createContext<EnquiryContextType>({
    openEnquiry: () => { },
});

export const useEnquiry = (): EnquiryContextType => useContext(EnquiryContext);
