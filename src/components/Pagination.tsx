import {
	Pagination as PaginationCmp,
	PaginationPage,
	PaginationNext,
	PaginationPrevious,
	PaginationPageGroup,
	PaginationContainer,
	PaginationSeparator,
} from "@ajna/pagination";
import type { PaginationProps } from "@ajna/pagination/dist/components/Pagination";

import { Spinner, Text } from "@chakra-ui/react";
import type { FC } from "react";

const Pagination: FC<PaginationExtendedProps> = ({
	pages,
	pagesCount,
	currentPage,
	onPageChange,
	isFetching,
	hasData,
}) => {
	return (
		<PaginationCmp pagesCount={pagesCount} currentPage={currentPage} onPageChange={onPageChange}>
			<PaginationContainer align="center" justify="space-between" py={4} w="full" gap={4}>
				{hasData && (
					<PaginationPrevious
						_hover={{
							bg: "blue.600",
						}}
						bg="blue.500"
					>
						<Text color="white">Previous</Text>
					</PaginationPrevious>
				)}
				{!isFetching && (
					<PaginationPageGroup
						isInline
						align="center"
						separator={<PaginationSeparator bg="blue.300" fontSize="sm" w={10} jumpSize={2} />}
					>
						{pages.map((page: number) => (
							<PaginationPage
								minW="40px"
								key={`pagination_page_${page}`}
								page={page}
								fontSize="sm"
								variant="outline"
								_current={{
									bg: "blue.500",
									fontSize: "sm",
									color: "white",
									_hover: {
										color: "black.500",
										bg: "blue.600",
									},
								}}
							/>
						))}
					</PaginationPageGroup>
				)}
				{isFetching && <Spinner color="blue.500" />}
				{hasData && (
					<PaginationNext
						_hover={{
							bg: "blue.600",
						}}
						bg="blue.500"
					>
						<Text color="white">Next</Text>
					</PaginationNext>
				)}
			</PaginationContainer>
		</PaginationCmp>
	);
};

export default Pagination;

export interface PaginationExtendedProps extends PaginationProps {
	pages: number[];
	isFetching: boolean;
	hasData: boolean;
}
