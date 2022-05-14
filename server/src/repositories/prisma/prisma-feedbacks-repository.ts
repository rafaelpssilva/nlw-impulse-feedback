import { prisma } from "../../prisma";
import {
    FeedbacksRespository,
    FeedbackCreateData,
} from "../feedbacks-respository";

export class PrismaFeedbackRepository implements FeedbacksRespository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            },
        });
    }
}
