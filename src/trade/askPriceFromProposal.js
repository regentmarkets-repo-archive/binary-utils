import type { Proposal } from '../types';

export default (proposal: Proposal) =>
    proposal && +proposal.ask_price;
