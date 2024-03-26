/* eslint-disable */
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        ignores: ['/node_modules/', '*.js'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
        rules: {
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'default',
                    format: ['camelCase'],
                    leadingUnderscore: 'forbid',
                    trailingUnderscore: 'forbid',
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                    leadingUnderscore: 'forbid',
                    trailingUnderscore: 'forbid',
                },
                {
                    selector: 'enumMember',
                    format: ['PascalCase'],
                },
                {
                    selector: 'classProperty',
                    modifiers: ['private'],
                    format: ['camelCase'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'forbid',
                },
                {
                    selector: 'classProperty',
                    modifiers: ['protected'],
                    format: ['camelCase'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'forbid',
                },
                {
                    selector: 'classProperty',
                    modifiers: ['static', 'readonly'],
                    format: ['PascalCase'],
                    leadingUnderscore: 'forbid',
                    trailingUnderscore: 'forbid',
                },
                {
                    selector: 'typeProperty', // interface, etc
                    format: ['camelCase'],
                    leadingUnderscore: 'forbid',
                    trailingUnderscore: 'forbid',
                },
                {
                    selector: 'method',
                    format: ['camelCase'],
                    leadingUnderscore: 'forbid',
                    trailingUnderscore: 'forbid',
                },
                {
                    selector: 'interface', // interfaces starting with "I" are forbidden
                    format: ['PascalCase'],
                    custom: {
                        regex: '^I[A-Z]',
                        match: false,
                    },
                },
            ],
        },
    }
);
