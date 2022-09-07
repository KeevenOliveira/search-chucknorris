import convertCategoryToDropdown from './convertCategoryToDropdown';

describe('convertCategoryToDropdown', () => {
    it('should return undefined if no categories are passed', () => {
        const result = convertCategoryToDropdown([]);
        expect(result).toEqual([]);
    });

    it('should return an array of objects with value and label properties', () => {
        const result = convertCategoryToDropdown(['test']);
        expect(result).toEqual([{ value: 'test', label: 'test' }]);
        expect(result).toHaveLength(1);
        expect(result).not.toHaveLength(2);
        expect(result).not.toHaveLength(0);
    });

    it('should return an array with length 20 of objects with value and label properties', () => {
        const result = convertCategoryToDropdown([
            'test',
            'test2',
            'test3',
            'test4',
            'test5',
            'test6',
            'test7',
            'test8',
            'test9',
            'test10',
            'test11',
            'test12',
            'test13',
            'test14',
            'test15',
            'test16',
            'test17',
            'test18',
            'test19',
            'test20',
        ]);
        expect(result).toHaveLength(20);
        const expectResult = [
            { value: 'test', label: 'test' },
            { value: 'test2', label: 'test2' },
            { value: 'test3', label: 'test3' },
            { value: 'test4', label: 'test4' },
            { value: 'test5', label: 'test5' },
            { value: 'test6', label: 'test6' },
            { value: 'test7', label: 'test7' },
            { value: 'test8', label: 'test8' },
            { value: 'test9', label: 'test9' },
            { value: 'test10', label: 'test10' },
            { value: 'test11', label: 'test11' },
            { value: 'test12', label: 'test12' },
            { value: 'test13', label: 'test13' },
            { value: 'test14', label: 'test14' },
            { value: 'test15', label: 'test15' },
            { value: 'test16', label: 'test16' },
            { value: 'test17', label: 'test17' },
            { value: 'test18', label: 'test18' },
            { value: 'test19', label: 'test19' },
            { value: 'test20', label: 'test20' },
        ];
        expect(result).toEqual(expectResult);
    });
});
