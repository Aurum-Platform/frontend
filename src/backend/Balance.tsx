import { useAccount, useBalance } from 'wagmi'

export function Balance() {
  const { address } = useAccount()
  const { data, refetch } = useBalance({
    address,
    watch: true,
  });

  return (
    { data, address, refetch}
  );
}