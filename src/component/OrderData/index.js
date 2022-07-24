import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { OrderContainer, OrderCardContainer, OrderCardTextContainer, Label } from './style';

export default function OrderData() {
    return (
        <OrderContainer>
            <OrderCardContainer>
                <MaterialCommunityIcons
                    name="circle"
                    size={60}
                    style={{ color: '#A9A9A9' }}
                />
                <OrderCardTextContainer>
                    <Label>order/detail/name</Label>
                    <Label>InProgree/Completed/Cancelled</Label>
                </OrderCardTextContainer>
                <Label>-20 INR</Label>
            </OrderCardContainer>
        </OrderContainer>
    );
}
