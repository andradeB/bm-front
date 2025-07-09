import { useState, useEffect } from 'react';
import { Input, Select, Button, Flex } from '@chakra-ui/react';

export interface SearchOption {
  key: string;
  label: string;
}

export interface SearchProps {
  options: SearchOption[];
  defaultKey: string;
  onSearch: (payload: { key: string; term: string }) => void;
}

export default function Search({ options, defaultKey, onSearch }: SearchProps) {
  const [key, setKey] = useState(defaultKey);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (term) {
        onSearch({ key, term });
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [key, term, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ key, term });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="2">
        <Select value={key} onChange={(e) => setKey(e.target.value)} w="auto">
          {options.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </Select>
        <Input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Buscar"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
        />
        <Button type="submit" colorScheme="blue">
          Buscar
        </Button>
      </Flex>
    </form>
  );
}
