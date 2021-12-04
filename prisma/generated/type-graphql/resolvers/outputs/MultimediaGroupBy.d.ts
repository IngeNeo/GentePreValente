import { MultimediaCountAggregate } from "../outputs/MultimediaCountAggregate";
import { MultimediaMaxAggregate } from "../outputs/MultimediaMaxAggregate";
import { MultimediaMinAggregate } from "../outputs/MultimediaMinAggregate";
export declare class MultimediaGroupBy {
    id: string;
    description: string;
    url: string;
    companyId: string;
    _count: MultimediaCountAggregate | null;
    _min: MultimediaMinAggregate | null;
    _max: MultimediaMaxAggregate | null;
}
