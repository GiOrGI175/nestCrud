import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenseModule } from './expense/expense.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ExpenseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
