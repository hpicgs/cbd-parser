import { Button, Flex, Spacer, Text } from '@chakra-ui/react';
import conf from '@cbd-parser/data/conf.json';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import {
    columnHeadersState,
    columnsState,
    dataSourceState,
    inputDataState,
    inputTypeState,
    statisticsState,
} from '../store/app';

export const Header = (): JSX.Element => {
    const setDataSource = useSetRecoilState(dataSourceState);
    const setInputData = useSetRecoilState(inputDataState);

    const resetDataSource = useResetRecoilState(dataSourceState);
    const resetInputData = useResetRecoilState(inputDataState);
    const resetInputType = useResetRecoilState(inputTypeState);
    const resetColumnHeaders = useResetRecoilState(columnHeadersState);
    const resetColumns = useResetRecoilState(columnsState);
    const resetStatistics = useResetRecoilState(statisticsState);

    const handleRemoteUrlClick = (): void => {
        handleResetClick();

        setTimeout(() => {
            setDataSource('remote');
            setInputData({
                url: conf.url,
                shouldPrefetch: false,
            });
        });
    };

    const handleGoogleSheetClick = (): void => {
        handleResetClick();

        setTimeout(() => {
            setDataSource('sheets');
            setInputData({
                apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
                sheetUrl: import.meta.env.VITE_GOOGLE_SHEET_URL,
            });
        });
    };

    const handleExcelSheetClick = (): void => {
        handleResetClick();

        setTimeout(() => {
            setDataSource('sheets');
            setInputData({
                apiKey: import.meta.env.VITE_EXCEL_API_KEY,
                sheetUrl: import.meta.env.VITE_EXCEL_SHEET_URL,
            });
        });
    };

    const handleResetClick = (): void => {
        resetDataSource();
        resetInputData();
        resetInputType();
        resetColumnHeaders();
        resetColumns();
        resetStatistics();
    };

    return (
        <Flex as="header" alignItems="center" gap={4} p={6} w="100%">
            <Text fontSize="lg" fontWeight={500}>
                Test Cases:
            </Text>
            {conf.url ? <Button onClick={handleRemoteUrlClick}>Remote URL</Button> : null}

            {import.meta.env.VITE_GOOGLE_API_KEY && import.meta.env.VITE_GOOGLE_SHEET_URL ? (
                <Button onClick={handleGoogleSheetClick}>Google Sheet</Button>
            ) : null}

            {import.meta.env.VITE_EXCEL_API_KEY && import.meta.env.VITE_EXCEL_SHEET_URL ? (
                <Button onClick={handleExcelSheetClick}>Excel Sheet</Button>
            ) : null}
            <Spacer />
            <Button colorScheme="gray" onClick={handleResetClick}>
                Reset
            </Button>
        </Flex>
    );
};
