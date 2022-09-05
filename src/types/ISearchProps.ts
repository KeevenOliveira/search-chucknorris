export default interface SearchProps {
    handleSubmit: (
        event: React.FormEvent<HTMLFormElement>,
        search: string | undefined,
        category: string | undefined,
    ) => void;
}
